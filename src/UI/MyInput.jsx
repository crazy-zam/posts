const MyInput = ({ children, ...props }) => {
  return <input {...props}>{children}</input>;
};

export default MyInput;
