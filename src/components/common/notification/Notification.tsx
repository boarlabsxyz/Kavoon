import st from './Notification.module.css';

type Props = {
  className?: string;
  messageArray: string[];
  delay: number;
};

function Notification({ messageArray, delay, className }: Props) {
  const delayForCSS = `${delay}ms`;

  const style = {
    animation: `fade-in-out ${delayForCSS} ease-in-out`,
  };

  return (
    <div
      className={className ? `${st.wrapper} ${className}` : st.wrapper}
      style={style}
    >
      {messageArray.map((message, index) => (
        <p key={index}>{message}</p>
      ))}
    </div>
  );
}

export default Notification;
