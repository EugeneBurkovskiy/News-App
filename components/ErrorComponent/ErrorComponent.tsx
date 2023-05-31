import { Text } from '@rneui/base';

interface IProps {
  content?: string;
}

const ErrorComponent: React.FC<IProps> = ({ content = 'Something wrong' }) => {
  return <Text>{content}</Text>;
};

export default ErrorComponent;
