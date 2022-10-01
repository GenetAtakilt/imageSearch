export interface Props {
  srcUrl: string;
  alt?: string;
}

export const Image: React.FC<Props> = ({ srcUrl, alt }) => {
  return <img className="img" src={srcUrl} alt={alt} />;
};
