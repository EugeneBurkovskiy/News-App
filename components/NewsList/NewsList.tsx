import { ScrollView } from 'react-native';

import { IArticle } from '../../types/types';
import NewsListItem from './NewsListItem/NewsListItem';

interface IProps {
  data: IArticle[];
}

const NewsList: React.FC<IProps> = ({ data }) => {
  return (
    <ScrollView>
      {data.map((item, i) => (
        <NewsListItem key={i} article={item} />
      ))}
    </ScrollView>
  );
};

export default NewsList;
