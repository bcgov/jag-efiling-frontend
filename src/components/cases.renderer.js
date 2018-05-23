let parties = function(data) {
    let appellantName = '?';
    let respondentName = '?';
    if (data.appellant) {
        appellantName = data.appellant;
    }
    if (data.appellants && data.appellants[0]) {
        appellantName = data.appellants[0].name;
    }
    if (data.respondent) {
        respondentName = data.respondent.name;
    }
    if (data.respondents && data.respondents[0]) {
        respondentName = data.respondents[0].name;
    }
    return appellantName + ' / ' + respondentName
}

let render = function(cases) {
    return cases.map(function(item) { 
        return {
            id:item.id,
            parties: parties(item.data),
            status: item.status,
            modified: item.modified,
            data: item.data
        };
    });
};

module.exports = render;