const Pool = require('pg').Pool
const pool = new Pool({
    user: 'alois',
    host: 'localhost',
    database: 'beerdb',
    password: 'root',
    port: 5432,
})

const getBeer = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('SELECT * FROM beers WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const createBeer = (request, response) => {
    const {
        name,
        type,
        size
    } = request.body

    pool.query('INSERT INTO beers (name, type, size) VALUES ($1, $2, $3)', [name, type, size], (error, results) => {
        if (error) {
            throw error
        }
        response.status(201).send(`Beers added with ID: ${result.insertId}`)
    })
}

const updateBeer = (request, response) => {
    const id = parseInt(request.params.id)
    const {
        name,
        type,
        size
    } = request.body

    pool.query(
        'UPDATE beers SET name = $1, type = $2, size = $3 WHERE id = $4',
        [name, type, size, id],
        (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).send(`Beers modified with ID: ${id}`)
        }
    )
}

const deleteBeer = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('DELETE FROM beers WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).send(`Beer deleted with ID: ${id}`)
    })
}

module.exports = {
    getBeer,
    createBeer,
    updateBeer,
    deleteBeer,
}