type TodoType = {
  userId: number;
  title: string;
  completed: boolean;
};

export const Todo = (props) => {
  const { userId, title, completed } = props;
  const completeMark = completed ? "[完]" : "[未]";
  return <p>{`${completeMark} ${title} 、ユーザ：${userId}`}</p>;
};
