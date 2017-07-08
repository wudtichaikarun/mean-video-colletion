//const videos = require ('./videos/model.js')
const mongoose = require('mongoose');

const Pagination = {
    // paginate(conditions, page = 1, perPage = 3) {
    //     const queryResults = this.find('title').where(conditions);

    //     return {
    //         [this.key]: queryResults.slice((page -1) * perPage, page * perPage),
    //         meta: {
    //             page,
    //             perPage,
    //             totalPages: Math.ceil(queryReaults.length / perPage)
    //         }
    //     }
    // }
    paginate(){
        console.log("hello paginate")
    }
}

export default Pagination