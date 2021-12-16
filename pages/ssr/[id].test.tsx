import { render, screen } from "@testing-library/react"
import posts from '../../fixtures/posts.json'
import PostItem from "./[id]"


describe("Post", () => {
    it("Post 가 표시된다.", () => {
        const expection = posts[0]
        render(<PostItem post={expection}/>)
        const element = screen.getByText(expection.title)
        expect(element).not.toBeUndefined()
    })
})