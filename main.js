var len = data.results[0].members.length;
var rcount = 0;
var dcount = 0;
var icount = 0;
var rsum = 0;
var dsum = 0;
var isum = 0;
for (var i = 0; i < len; i++) {
    if (data.results[0].members[i].party == "R") {
        rcount = rcount + 1;
        rsum = rsum + data.results[0].members[i].total_votes;
    } else if (data.results[0].members[i].party == "D") {
        dcount = dcount + 1;
        dsum = rsum + data.results[0].members[i].total_votes;
    } else if (data.results[0].members[i].party == "I") {
        icount = icount + 1;
        isum = rsum + data.results[0].members[i].total_votes;
    }
}

var total = rsum + dsum + isum;
var rpec = rsum / total * 100 | 0;
var dpec = dsum / total * 100 | 0;
var ipec = isum / total * 100 | 0;
//console.log(total,rpec,dpec,ipec);

var repsRep = document.getElementById('rc');
repsRep.innerHTML = rcount;
var repsRep = document.getElementById('dc');
repsRep.innerHTML = dcount;
var repsRep = document.getElementById('ic');
repsRep.innerHTML = icount;
var repsRep = document.getElementById('rp');
repsRep.innerHTML = rpec;
var repsRep = document.getElementById('dp');
repsRep.innerHTML = dpec;
var repsRep = document.getElementById('ip');
repsRep.innerHTML = ipec;

if (document.title.includes('senateAttendance')) {
    var missedVotes = [];
    for (var i = 0; i < len; i++) {
        missedVotes.push(data.results[0].members[i].missed_votes);
    }
    missedVotes.sort(sortNumber);
    missedVotes = findUniq(missedVotes);
    var tenpec = len / 10 | 0;

    for (var j = 0; j < 10; j++) {
        for (var i = 0; i < len; i++) {
            if (data.results[0].members[i].missed_votes == missedVotes[j]) {
                printTable(data.results[0].members[i].first_name, data.results[0].members[i].missed_votes, data.results[0].members[i].missed_votes_pct, "lEtable");
            }
        }
    }
    for (var j = missedVotes.length; j > missedVotes.length - 10; j--) {
        for (var i = 0; i < len - 1; i++) {
            if (data.results[0].members[i].missed_votes == missedVotes[j]) {
                printTable(data.results[0].members[i].first_name, data.results[0].members[i].missed_votes, data.results[0].members[i].missed_votes_pct, "mEtable");
            }
        }
    }
} else if (document.title.includes('houseAttendance')) {
    var missedVotes = [];
    for (var i = 0; i < len; i++) {
        missedVotes.push(data.results[0].members[i].missed_votes);
    }
    missedVotes.sort(sortNumber);
    missedVotes = findUniq(missedVotes);
    var tenpec = len / 10 | 0;

    for (var j = 0; j < 10; j++) {
        for (var i = 0; i < len; i++) {
            if (data.results[0].members[i].missed_votes == missedVotes[j]) {
                printTable(data.results[0].members[i].first_name, data.results[0].members[i].missed_votes, data.results[0].members[i].missed_votes_pct, "hlEtable");
            }
        }
    }
    for (var j = missedVotes.length; j > missedVotes.length - 10; j--) {
        for (var i = 0; i < len - 1; i++) {
            if (data.results[0].members[i].missed_votes == missedVotes[j]) {
                printTable(data.results[0].members[i].first_name, data.results[0].members[i].missed_votes, data.results[0].members[i].missed_votes_pct, "hmEtable");
            }
        }
    }
} else if (document.title.includes('senateLoyality')) {
    var totalVotes = [];

    for (var i = 0; i < len; i++) {
        totalVotes.push(data.results[0].members[i].total_votes);
    }
    totalVotes.sort(sortNumber);
    totalVotes = findUniq(totalVotes);
    var tenpec = len / 10 | 0;


    for (var j = 0; j < 10; j++) {
        for (var i = 0; i < len; i++) {
            if (data.results[0].members[i].total_votes == totalVotes[j]) {
                printTable(data.results[0].members[i].first_name, data.results[0].members[i].total_votes, data.results[0].members[i].votes_with_party_pct, "lLtable");
            }
        }
    }
    for (var j = totalVotes.length; j > totalVotes.length - 10; j--) {
        for (var i = 0; i < len - 1; i++) {
            if (data.results[0].members[i].total_votes == totalVotes[j]) {
                printTable(data.results[0].members[i].first_name, data.results[0].members[i].total_votes, data.results[0].members[i].votes_with_party_pct, "mLtable");
            }
        }
    }
} else if (document.title.includes('houseloyality')) {
    var totalVotes = [];

    for (var i = 0; i < len; i++) {
        totalVotes.push(data.results[0].members[i].total_votes);
    }
    totalVotes.sort(sortNumber);
    totalVotes = findUniq(totalVotes);
    var tenpec = len / 10 | 0;

    for (var j = 0; j < 10; j++) {
        for (var i = 0; i < len; i++) {
            if (data.results[0].members[i].total_votes == totalVotes[j]) {
                printTable(data.results[0].members[i].first_name, data.results[0].members[i].total_votes, data.results[0].members[i].votes_with_party_pct, "lLtable");
            }
        }
    }
    for (var j = totalVotes.length; j > totalVotes.length - 10; j--) {
        for (var i = 0; i < len - 1; i++) {
            if (data.results[0].members[i].total_votes == totalVotes[j]) {
                printTable(data.results[0].members[i].first_name, data.results[0].members[i].total_votes, data.results[0].members[i].votes_with_party_pct, "mLtable");
            }
        }
    }
}

function sortNumber(a, b) {
    return a - b;
}

function findUniq(recArr) {
    var len = recArr.length;
    var uniqArr = [];
    uniqArr.push(recArr[0]);
    var found = false;
    for (var i = 1; i < len; i++) {
        found = false;
        for (var j = 0; j < uniqArr.length; j++) {
            if (uniqArr[j] == recArr[i]) {
                found = true;
            }
        }
        if (found == false) {
            uniqArr.push(recArr[i]);
        }
    }
    return uniqArr;
}

function printTable(celval1, celval2, celval3, tableName) {

    var tr = document.createElement("tr");
    var td = document.createElement("td");
    tr.appendChild(td);
    var val = document.createTextNode(celval1);
    td.appendChild(val);
    tr.appendChild(td);
    var td = document.createElement("td");
    tr.appendChild(td);
    var val = document.createTextNode(celval2);
    td.appendChild(val);
    var td = document.createElement("td");
    tr.appendChild(td);
    var val = document.createTextNode(celval3);
    td.appendChild(val);
    console.log(tableName);
    document.getElementById(tableName).appendChild(tr);

}
