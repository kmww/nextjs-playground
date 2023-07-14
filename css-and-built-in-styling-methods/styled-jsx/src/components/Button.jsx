const Button = (props) => {
  return (
    <>
      <button className='button'>{props.children}</button>
      <style jsx>
        {`
          .button {
            padding: 1rem;
            border-radius: 1rem;
            border: none;
            background: green;
            color: white;
          }
        `}
      </style>
    </>
  );
};

export default Button;
