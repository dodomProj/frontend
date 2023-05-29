import { useLocation } from 'react-router-dom';
import SubtitleBox from '../components/SubtitleBox';
import { PageBase } from '../styles/basePadding';
import { psychologicalTest } from '../data/psychologicalTest';

const ConditionCheck = () => {
  const { pathname } = useLocation();

  const findTest = (pathname: string) => {
    if (!pathname) return;
    const key = pathname.split('/condition/')[1];
    const test = { ...psychologicalTest.find((test) => test.key === key) };
    delete test.key;
    return test;
  };

  return (
    <PageBase>
      <SubtitleBox {...findTest(pathname)} />
    </PageBase>
  );
};

export default ConditionCheck;
