describe('test the band post endpoint', function(){
    it('tests creating a band', function(){
        cy.server()
        let a = {
            method: "POST",
            url: 'http://app:3000/bands',
            body: {
                "bandname": "Glass Onion",
                "members": [
                    {
                        "name": "Subhayu",
                        "instrument": "bass"
                    },
                    {
                        "name": "Laddu",
                        "instrument": "Guitars"
                    }
                ]
            }
        }
        cy.request(a).then((response) =>{
            expect(response.status).to.equal(200)
            expect(response.body.bandname).to.equal('Glass Onion')
        })
    })
})
