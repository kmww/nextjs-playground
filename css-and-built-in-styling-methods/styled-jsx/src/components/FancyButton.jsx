const FancyButton = (props) => {
  return (
    <>
      <button className='button'>{props.children}</button>
      <style jsx>
        {`
          .button {
            padding: 2rem;
            border-radius: 2rem;
            background: purple;
            color: white;
            font-weight: bold;
            border: pink solid 2px;
          }
        `}
      </style>
    </>
  );
};

export default FancyButton;
