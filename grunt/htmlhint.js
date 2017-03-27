module.exports = {
    build: {
        options: {
            'tagname-lowercase': true,
            'attr-lowercase': true,
            'attr-value-double-quotes': true,
            'doctype-first': true,
            'spec-char-escape': true,
            'id-unique': true
        },
        src: ['app/*.html', 'app/views/*.html']
    }
};