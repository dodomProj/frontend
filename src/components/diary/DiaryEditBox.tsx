import { useRef } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { formDataState } from '../../recoil/reserve';
import {
  diaryTextState,
  diarySubmitState,
  tipHoverState,
} from '../../recoil/diary';

import diaryTips from '../../data/diaryTips';
import useAutosizeTextArea from '../../util/useAutosizeTextArea';

export const Box = styled.div`
  background-color: var(--third);
  border-radius: 20px;
  padding: 4rem;
`;
const EditTip = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Info = styled.div`
  img {
    width: 3.5rem;
    cursor: pointer;
  }
  div {
    position: absolute;
    right: 12rem;
    background-color: var(--white);
    opacity: 0.6;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    padding: 1rem 2rem;
    p {
      text-indent: -1rem;
      margin-bottom: 1rem;
    }
  }
  li {
    font-family: 'Pretendard-Regular';
    font-size: 12px;
    line-height: 1rem;
  }
`;
const EditForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  justify-content: space-between;
  textarea {
    width: 100%;
    height: fit-content;
    border: none;
    font-size: 18px;
    padding: 0.5rem 0.2rem;
    resize: none;
    ::placeholder {
      color: var(--sub3);
      line-height: 22px;
    }
    :focus {
      outline: none;
    }
    background: transparent;
  }
  button {
    margin-top: 3rem;
    margin-bottom: 5.2rem;
    width: fit-content;
    padding: 10px 50px;
    font-size: 24px;
    background-color: var(--primary);
    border-radius: 10px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
    border: none;
  }
`;

const DiaryEditBox = () => {
  const navigate = useNavigate();

  const [diaryText, setDiaryText] = useRecoilState(diaryTextState);
  const [tipHover, setTipHover] = useRecoilState(tipHoverState);
  const setDiarySubmit = useSetRecoilState(diarySubmitState);
  const [formData, setFormData] = useRecoilState(formDataState);

  const textareaRef = useRef<HTMLTextAreaElement>(null);
  useAutosizeTextArea(textareaRef.current, diaryText);
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target?.value;
    setDiaryText(text);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (diaryText.length) {
      setDiarySubmit(true);
      setFormData({ ...formData, type: '마음 일기', result: diaryText });
      navigate('/diary/result');
    }
  };

  return (
    <Box>
      <EditTip>
        <h2>솔직한 내 마음 일기</h2>
        <Info>
          <img
            alt="diaryExample"
            src={process.env.PUBLIC_URL + '/assets/info.png'}
            onMouseOver={() => setTipHover(true)}
            onMouseOut={() => setTipHover(false)}
          />
          {tipHover ? (
            <div>
              <p>무슨 말을 써야할 지 모르겠다면, 아래 질문을 참고해보세요!</p>
              <ul>
                {diaryTips.map((tip) => (
                  <li>{tip}</li>
                ))}
              </ul>
            </div>
          ) : null}
        </Info>
      </EditTip>
      <EditForm onSubmit={(e) => handleSubmit(e)}>
        <textarea
          onChange={handleChange}
          placeholder="정해진 이야기는 없어요.&#13;&#10;하고 싶은 이야기를 마음껏 작성해주세요 :)"
          ref={textareaRef}
          rows={4}
          value={diaryText}
          autoFocus
        />
        <button type="submit">작성하기</button>
      </EditForm>
    </Box>
  );
};

export default DiaryEditBox;
