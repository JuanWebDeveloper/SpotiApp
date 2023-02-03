export interface Card {
  image: string;
  title: string;
  subTitle: {
    text: string;
    value: string;
  };
  bodyTitle: {
    text: string;
    span: string;
  };
  uri: string;
  footer: {
    footerTitle: string;
    footerItems: [
      {
        itemName: string;
        itemId?: string;
      }
    ];
  };
}
