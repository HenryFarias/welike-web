const Form = {
    post: (refs) => {
        var data = {}
        for (var ref in refs) {
            data[ref] = refs[ref].value
        }
        return data;
    },

    clear: (refs) => {
        for (var ref in refs) {
            refs[ref].value = '';
        }
    }
}

export default Form;
