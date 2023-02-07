
const carouselIframe = (item) => {
  switch (item) {
    case 0:
      return (
        <>

          <iframe
            width="100%"
            height="245"
            src="https://www.youtube.com/embed/do0kj_a7dvA"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </>
      );
    case 1:
      return (
        <>
          <iframe
            width="100%"
            height="245"
            src="https://www.youtube.com/embed/iXgr8zsqLMM"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </>
      );

    case 2:
      return (
        <>
          <iframe
            width="100%"
            height="245"
            src="https://www.youtube.com/embed/n0NoXbHf-kc"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </>
      );
    case 3:
      return (
        <>
          <iframe
            width="100%"
            height="245"
            src="https://www.youtube.com/embed/lfUpLHnmtFw"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </>
      );

    case 4:
      return (
        <>
          <iframe
            width="100%"
            height="245"
            src="https://www.youtube.com/embed/0UhyS4W_Ddk"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </>
      );
    default:
      return <></>;
  }
};

const carouselData = [
  {
    id: 0,
    title: "Success stories",
    discription: " How to search profile",
  },
  {
    id: 1,
    title: "Success Stroy | Khula",
    discription:
      " @India Nikah | 🤲 Success story alhamdulillah 🤲 | 46 years divorced female Mumbai",
  },
  {
    id: 2,
    title: "Success story | Pune Maharashtra",
    discription:
      "🤲 Success story alhamdulillah 🤲 | 46 years divorced female Mumbai",
  },
  {
    id: 3,
    title: "Success stories",
    discription: " How to search profile",
  },
  {
    id: 4,
    title: "Success stories",
    discription: " How to search profile",
  },
];

export { carouselIframe, carouselData };
