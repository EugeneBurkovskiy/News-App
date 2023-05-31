import { useState } from 'react';
import { Linking, Text } from 'react-native';
import { Card, ListItem, Button } from '@rneui/themed';

import { IArticle } from '../../../types/types';

interface IProps {
  article: IArticle;
}

const NewsListItem: React.FC<IProps> = ({ article }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { source, author, title, description, url, urlToImage, publishedAt } =
    article;

  function sliceTitle(fullTitle: string) {
    const shortTitle = `${fullTitle.substring(0, 50)}...`;
    return shortTitle;
  }

  const handleLink = () => {
    Linking.openURL(url);
  };

  return (
    <ListItem.Accordion
      isExpanded={isExpanded}
      onPress={() => setIsExpanded((prev) => !prev)}
      content={
        <Text style={{ width: '90%' }}>{title && sliceTitle(title)}</Text>
      }
    >
      <Card>
        <Card.Title>{title}</Card.Title>
        <Text>{source.name}</Text>
        {author && <Text>{author}</Text>}
        <Text>{publishedAt}</Text>
        <Card.Divider />
        <Card.Image source={{ uri: urlToImage }} />
        <Text>{description}</Text>
        <Button title='More' type='clear' onPress={handleLink} />
      </Card>
    </ListItem.Accordion>
  );
};

export default NewsListItem;
