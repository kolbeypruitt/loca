// import realestateApi from '../../realestateapi'


export default function(req, callback) {
    req.model = Object.assign({}, req.model);
    callback();
}