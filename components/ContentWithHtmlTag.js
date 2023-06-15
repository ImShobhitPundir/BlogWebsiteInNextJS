import parse from "html-react-parser";

export const ContentWithHtmlTag = ({ content, image }) => {
  return (
    <div>
      {image ? (
        <div className="flex place-content-center">
          <img
            src={`http://spundir.in/l9_blog/storage/blog/${image}`}
            alt="Blog Image"
            className="object-cover w-[80%] my-10"
          />
        </div>
      ) : null}
      {parse(content)}
    </div>
  );
};
