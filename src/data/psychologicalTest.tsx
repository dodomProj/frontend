export interface TestInfo {
  key: string;
  title: string;
  text: string[];
  img: string;
  time: number;
}

export const psychologicalTest: TestInfo[] = [
  {
    key: 'depression',
    title: '우울증 검사',
    text: [
      '마음을 편안하게 안정시킨 후 문항에 대한 자신의 생각과 상태를 있는 그대로 나타내시면 됩니다. 이 검사를 통해 본인의 **우울증** 정도를 판단할 수 있으며,  이 검사는 자신을 이해하는 데에 유익한 도움을 줄 수 있습니다.',
      '하지만 이 검사 결과의 의미를 지나치게 확대 해석하여 대입하면 안됩니다.',
    ],
    img: '',
    time: 5,
  },
  {
    key: 'anxiety',
    title: '불안증 검사',
    text: [
      '마음을 편안하게 안정시킨 후 문항에 대한 자신의 생각과 상태를 있는 그대로 나타내시면 됩니다. 이 검사를 통해 본인의 **불안증** 정도를 판단할 수 있으며,  이 검사는 자신을 이해하는 데에 유익한 도움을 줄 수 있습니다.',
      '하지만 이 검사 결과의 의미를 지나치게 확대 해석하여 대입하면 안됩니다.',
    ],
    img: '',
    time: 5,
  },
  {
    key: 'stress',
    title: '스트레스 검사',
    text: [
      '마음을 편안하게 안정시킨 후 문항에 대한 자신의 생각과 상태를 있는 그대로 나타내시면 됩니다. 이 검사를 통해 본인의 **스트레스** 정도를 판단할 수 있으며,  이 검사는 자신을 이해하는 데에 유익한 도움을 줄 수 있습니다.',
      '하지만 이 검사 결과의 의미를 지나치게 확대 해석하여 대입하면 안됩니다.',
    ],
    img: '',
    time: 5,
  },
  {
    key: 'stress-management',
    title: '스트레스 대처 방식 검사',
    text: [
      '마음을 편안하게 안정시킨 후 문항에 대한 자신의 생각과 상태를 있는 그대로 나타내시면 됩니다. 이 검사를 통해 본인의 **스트레스 대처 방식**을 판단할 수 있으며,  이 검사는 자신을 이해하는 데에 유익한 도움을 줄 수 있습니다.',
      '하지만 이 검사 결과의 의미를 지나치게 확대 해석하여 대입하면 안됩니다.',
    ],
    img: '',
    time: 5,
  },
  {
    key: 'communication-parent-child',
    title: '부모-자녀의사소통검사',
    text: [
      '마음을 편안하게 안정시킨 후 문항에 대한 자신의 생각과 상태를 있는 그대로 나타내시면 됩니다. 이 검사를 통해 본인이 부모님과의 대화 시 어떠한 의사소통 유형을 사용하고 있는지 파악할 수 있습니다. 원활한 의사소통은 서로에게 긍정적인 영향을 주고 서로를 이해하는 데 큰 도움이 됩니다.',
      '이 검사는 자신을 이해하는 데에 유익한 도움을 줄 수 있습니다. 하지만 이 검사 결과의 의미를 지나치게 확대 해석하여 대입하면 안됩니다.',
    ],
    img: '',
    time: 5,
  },
  {
    key: 'interpersonal',
    title: '대인관계능력검사',
    text: [
      '마음을 편안하게 안정시킨 후 문항에 대한 자신의 생각과 상태를 있는 그대로 나타내시면 됩니다. 이 검사를 통해 본인의 주변 사람들과의 대인관계능력을 측정할 수 있습니다.',
      '이 검사는 자신을 이해하는 데에 유익한 도움을 줄 수 있습니다. 하지만 이 검사 결과의 의미를 지나치게 확대 해석하여 대입하면 안됩니다.',
    ],
    img: '',
    time: 5,
  },
];
