type greetProps = {
  name: string;
  messageCount: number;
  isLogin: boolean;
};

const Greet = (props: greetProps) => {
  return (
    <h1>
      {props.isLogin
        ? `Welcome ${props.name}! you have ${props.messageCount} messages in waiting.`
        : "Welcome guest"}
    </h1>
  );
};

export default Greet;
