import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
} from "./DirectoryItem.styles.jsx";

function DirectoryItem({ category }) {
  const { title, imageUrl, route } = category;

  return (
    <DirectoryItemContainer to={route}>
      <BackgroundImage className="background-image" imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop now</p>
      </Body>
    </DirectoryItemContainer>
  );
}

export default DirectoryItem;
