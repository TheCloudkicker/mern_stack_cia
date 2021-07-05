const app = require("../server");
const request = require('supertest')


describe('Post Endpoints', () => {

    it('should create a new post', async () => {
        r
        const res = await request(app)
            .post("/api/v1/files")
            .send({
                "title": "test123.txt",
                "uploadedBy": "batman",
                "redactedValues": "red sox1",
                "text": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores necessitatibus rerum sapiente, voluptatum nulla quisquam magni perspiciatis porro aperiam officia sint modi dolorem temporibus alias excepturi, eos et laudantium culpa consequatur! Eaque, pariatur. Quod dignissimos numquam quas necessitatibus eveniet. Omnis illum facere voluptas aliquam adipisci in vel quia ipsam dolorem laudantium maiores, eveniet amet! Incidunt doloremque beatae eius vel facere quo repudiandae omnis nobis, voluptatibus repellat quae nisi ullam perferendis eligendi. Ducimus mollitia maxime magni, molestiae porro dolorum, illum vitae ipsum ratione at nisi consectetur quis totam inventore tempora dolores quaerat necessitatibus harum voluptatum. Harum ipsum molestias voluptatum numquam excepturi, possimus temporibus unde, vel nesciunt reprehenderit odit et quisquam ab adipisci natus quos. Consequatur esse deserunt, doloribus alias illum nostrum odio quidem atque eos totam beatae porro, corporis temporibus dolores facere dolore. Rerum laudantium id provident at, nulla dolorum eligendi quia magnam quaerat illo quae animi. Molestiae placeat a adipisci asperiores hic. Quae, quaerat enim. Doloribus repudiandae reprehenderit quasi, magnam accusamus aut dolorem voluptas distinctio nam aliquid nostrum. Labore nisi velit odio nesciunt recusandae impedit sed amet! Corporis necessitatibus, dignissimos nemo vero autem fugit cupiditate sit repellat non, laudantium quisquam, mollitia eligendi quibusdam fuga. Quisquam dolorem odit ullam incidunt laudantium nihil laborum repellendus illo vitae tempore error, ut dignissimos ducimus a pariatur consectetur dolor? Itaque eveniet fuga maiores architecto esse ipsa nobis vero quis ab voluptate! Optio placeat quisquam expedita porro fugiat necessitatibus aspernatur ipsum in laudantium laborum, veniam quia? Error odit nobis totam blanditiis sint voluptatibus recusandae ratione est laboriosam!"
            })
        expect(res.statusCode).toEqual(201)
    })
})



// .expect(201)
// .then(async (response) => {

//     console.log("res", response)
//     // Check the response
//     expect(response.body.title).toBe(data.title);
//     expect(response.body.uploadedBy).toBe(data.uploadedBy);
//     expect(response.body.redactedValues).toBe(data.redactedValues);
//     expect(response.body.text).toBe(data.text);
// }).catch(err => console.log('error', err));