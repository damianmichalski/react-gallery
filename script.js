'use scrict';

var movies = [
    {
        id: 1,
        title: 'Harry Potter',
        desc: 'film o czarodzieju',
        image: 'https://www.cosmopolitan.pl/u/ic/W1/u/a/17/07/harry-potter-powraca-dostaniemy-az-dwie-nowe-ksiazki_5970c9e7.jpeg'
    },
    {
        id: 2,
        title: 'Król Lew',
        desc: 'Film o królu sawanny',
        image: 'http://cdn.galleries.smcloud.net/t/photos/gf-4xtK-Xhd9-g2pY_krol-lew.jpg'
    },
    {
        id: 3,
        title: 'Matrix',
        desc: 'Matrix – australijsko-amerykański film science fiction, pierwszy z trylogii filmowej o tej samej nazwie, napisany i wyreżyserowany przez Larry’ego i Andy’ego Wachowskich.',
        image: 'https://liczysiewynik.pl/wp-content/uploads/2015/05/matrix-1050x700.jpg'
    },
    {
        id: 4,
        title: 'Lord of the rings',
        desc: 'Władca Pierścieni: Drużyna Pierścienia – pierwszy film z trylogii Władca Pierścieni w reżyserii Petera Jacksona. Światowa premiera filmu odbyła się 19 grudnia 2001 r. Film jest adaptacją pierwszej części powieści J.R.R. Tolkiena Władca Pierścieni zatytułowanej Drużyna Pierścienia.',
        image: 'https://www.whats-on-netflix.com/wp-content/uploads/2018/07/is-the-lord-of-the-rings-trilogy-on-netflix-2018.jpg'
    }
];


var MovieTitle = React.createClass({
    propTypes: {
        movie: React.PropTypes.string.isRequired,
    },
    render: function() {
        return (
            React.createElement('h2', {}, this.props.movie)
        );
    }
});

var MovieDescription = React.createClass({
    propTypes: {
        desc: React.PropTypes.string.isRequired,
    },
    render: function() {
        return (
            React.createElement('p', {}, this.props.desc)
        );
    }
});

var MovieImage = React.createClass({
    propTypes: {
        image: React.PropTypes.string.isRequired,
    },
    render: function() {
        return (
            React.createElement('img', {src: this.props.image})
        );
    }
});

var Movie = React.createClass({
    propTypes: {
        movie: React.PropTypes.object.isRequired,
    },
    render: function() {
        return (
            React.createElement('li', {key: this.props.movie.id},
                React.createElement(MovieTitle, {movie: this.props.movie.title}),
                React.createElement(MovieDescription, {desc: this.props.movie.desc}),
                React.createElement(MovieImage, {image: this.props.movie.image})
            )
        );
    }
});

var MoviesList = React.createClass({
    propTypes: {
        list: React.PropTypes.array.isRequired,
    },
    render: function() {
        var moviesElements = this.props.list.map(function (movie) {
            return (
                React.createElement(Movie, {movie: movie, key: movie.id})
            )
        });
        return (
            React.createElement('ul', {}, moviesElements)
        )
    }
})

var element =
    React.createElement('div', {},
        React.createElement('h1', {}, 'Lista filmów'),
        React.createElement(MoviesList, {list: movies})
    );

ReactDOM.render(element, document.getElementById('app'));