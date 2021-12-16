import { render, screen } from "@testing-library/react";
import SSR, {
  getServerSideProps,
  makeServerSideProps,
  postUrl,
} from "../ssr/index";
import posts from "../../fixtures/posts.json";
import { FetchMock } from "jest-fetch-mock";
import { GetServerSidePropsContext } from "next";
import { isContext } from "vm";

const fetchMock = fetch as FetchMock;

describe("SSR Page ", () => {
  it("List 에 첫번째 Post Title이 표시된다.", () => {
    let expection = posts[0].title;
    render(<SSR posts={posts} />);
    const element = screen.getByText(expection);

    expect(element).not.toBeUndefined();
  });

  describe("getServerSideProps", () => {
    
    
    it("{ props: Posts } 를 Return한다.", async () => {
      const props = await makeServerSideProps(posts);
      expect(props).toEqual({
        props: {
          posts: posts,
        },
      });
    });
  });
});
