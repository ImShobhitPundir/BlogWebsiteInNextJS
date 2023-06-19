import parse from "html-react-parser";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export const ContentWithHtmlTag = ({ content, image }) => {
  return (
    <div>
      {image ? (
        <div className="flex place-content-center">
         
          <LazyLoadImage
            src={`https://spundir.in/l9_blog/storage/blog/${image}`}
            alt="Blog Image"            
            effect="blur"
            className="object-cover w-[80%] my-10"
          />
        </div>
      ) : null}
      {parse(content)}
    </div>
  );
};
