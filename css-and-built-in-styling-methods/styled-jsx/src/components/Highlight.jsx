const Highlight = (props) => {
  return (
    <>
      <span>{props.text}</span>
      <style jsx global>{`
        span {
          background: yellow;
          font-weight: bold;
        }
      `}</style>
    </>
  );
};

export default Highlight;
