import styled from 'styled-components';
import { PageBase, basePadding } from '../styles/basePadding';

import { useRecoilValue, useSetRecoilState, useResetRecoilState } from 'recoil';
import { diarySubmitState } from '../recoil/diary';
import { reserveCardInfo } from './../recoil/reserve';

import TextBox from '../components/common/TextBox';
import { aboutDiary } from '../data/textBoxData';
import DiaryEditBox from '../components/diary/DiaryEditBox';
import DiaryResultBox from '../components/diary/DiaryResultBox';

import { Routes, Route, Navigate } from 'react-router-dom';
import { useEffect } from 'react';

const DiaryBox = styled(PageBase)`
  display: flex;
  flex-direction: column;
`;
const Bottom = styled.div`
  ${basePadding};
  padding-top: 7.5rem;
  width: 100%;
  height: fit-content;
  margin-bottom: 4rem;
`;

const Diary = () => {
  const setCardInfo = useSetRecoilState(reserveCardInfo);
  const resetCardInfo = useResetRecoilState(reserveCardInfo);
  const diarySubmit = useRecoilValue(diarySubmitState);
  useEffect(() => {
    resetCardInfo();
    setCardInfo({ ...aboutDiary });
  }, [setCardInfo, resetCardInfo]);
  return (
    <DiaryBox>
      <TextBox {...aboutDiary} />
      <Bottom>
        <Routes>
          <Route path="/" element={<DiaryEditBox />} />
          <Route
            path="/result"
            element={
              diarySubmit ? (
                <DiaryResultBox />
              ) : (
                <Navigate replace to="/diary" />
              )
            }
          />
        </Routes>
      </Bottom>
    </DiaryBox>
  );
};

export default Diary;
