describe('some complex examples', () => {
  _.forEach({
    'concat("uuid:", uuid())':/uuid:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}/,
    '"2015-07-15" &lt; today()': true,
    '"2015-07-15" < today()' : true,
    "'2015-07-15' &lt; today()" : true,
    "'2015-07-15' < today()" : true,
    "'raw-string'" : 'raw-string',
    'format-date-time(date-time(decimal-date-time("2003-03-12") + 280), "%b %e, %Y")': /Dec 17, 2003/,
    "decimal-date-time(today()- 60 )": /^-?[0-9]+(\.[0-9]+)?$/,
    "date-time(decimal-date-time(today()- 60 ))": /\d{4}-\d{2}-\d{2}/,
    "if(selected( 'date' ,'date'), 'first' ,'second')": /^first$/,
    "if(selected( 'approx' ,'date'), 'first' ,'second')": /^second$/,
    "if(selected(/model/instance[1]/pregnancy/group_lmp/lmp_method, 'date'), /model/instance[1]/pregnancy/group_lmp/lmp_date, 'testing')": /testing/,
    "if(selected(/model/instance[1]/pregnancy/group_lmp/lmp_method, 'date'), /model/instance[1]/pregnancy/group_lmp/lmp_date, concat('testing', '1', '2', '3', '...'))": /testing/,
    "if(selected(/model/instance[1]/pregnancy/group_lmp/lmp_method, 'date'), /model/instance[1]/pregnancy/group_lmp/lmp_date, date-time(0))": FULL_DATE_MATCH,
    "if(selected(/model/instance[1]/pregnancy/group_lmp/lmp_method, 'date'), /model/instance[1]/pregnancy/group_lmp/lmp_date, date-time(decimal-date-time(today() - 60)))": FULL_DATE_MATCH,
    "if(selected( /model/instance[1]/pregnancy/group_lmp/lmp_method ,'date'), /model/instance[1]/pregnancy/group_lmp/lmp_date ,date-time(decimal-date-time(today()- 60 )))": FULL_DATE_MATCH,
    'if(true(), today(), today())': FULL_DATE_MATCH,
    'if(false(), today(), today())': FULL_DATE_MATCH,
    'if(true(), "", today())': /^$/,
    'if(false(), "", today())': FULL_DATE_MATCH,
    'if(true(), today(), "")': FULL_DATE_MATCH,
    'if(false(), today(), "")': /^$/,
    'coalesce(today(), "")': FULL_DATE_MATCH,
    'coalesce("", today())': FULL_DATE_MATCH,
    'true() or true() or true()': true,
    'true() or true() or false()': true,
    'true() or false() or true()': true,
    'false() or true() or true()': true,
    'true() or false() or false()': true,
    'false() or true() or false()': true,
    'false() or false() or true()': true,
    'false() or false() or false()': false,
    '(true() or true()) or true()': true,
    '(true() or true()) or false()': true,
    '(true() or false()) or true()': true,
    '(false() or true()) or true()': true,
    '(true() or false()) or false()': true,
    '(false() or true()) or false()': true,
    '(false() or false()) or true()': true,
    '(false() or false()) or false()': false,
    'true() or (true() or true())': true,
    'true() or (true() or false())': true,
    'true() or (false() or true())': true,
    'false() or (true() or true())': true,
    'true() or (false() or false())': true,
    'false() or (true() or false())': true,
    'false() or (false() or true())': true,
    'false() or (false() or false())': false,
    '(true() and true()) or true()': true,
    '(true() and true()) or false()': true,
    '(true() and false()) or true()': true,
    '(false() and true()) or true()': true,
    '(true() and false()) or false()': false,
    '(false() and true()) or false()': false,
    '(false() and false()) or true()': true,
    '(false() and false()) or false()': false,
    'true() or (true() and true())': true,
    'true() or (true() and false())': true,
    'true() or (false() and true())': true,
    'false() or (true() and true())': true,
    'true() or (false() and false())': true,
    'false() or (true() and false())': false,
    'false() or (false() and true())': false,
    'false() or (false() and false())': false,
    '(true() or true()) and true()': true,
    '(true() or true()) and false()': false,
    '(true() or false()) and true()': true,
    '(false() or true()) and true()': true,
    '(true() or false()) and false()': false,
    '(false() or true()) and false()': false,
    '(false() or false()) and true()': false,
    '(false() or false()) and false()': false,
    '(true() and true()) and true()': true,
    '(true() and true()) and false()': false,
    '(true() and false()) and true()': false,
    '(false() and true()) and true()': false,
    '(true() and false()) and false()': false,
    '(false() and true()) and false()': false,
    '(false() and false()) and true()': false,
    '(false() and false()) and false()': false,
    'true() and true() and true()': true,
    'true() and true() and false()': false,
    'true() and false() and true()': false,
    'false() and true() and true()': false,
    'true() and false() and false()': false,
    'false() and true() and false()': false,
    'false() and false() and true()': false,
    'false() and false() and false()': false,
    'true() and (true() or true())': true,
    'true() and (true() or false())': true,
    'true() and (false() or true())': true,
    'true() and (false() or false())': false,
    'false() and (true() or true())': false,
    'false() and (true() or false())': false,
    'false() and (false() or true())': false,
    'false() and (false() or false())': false,
    '(true() and true()) or (false() and false())': true,
    '(true() and true()) and (false() and false())': false,
    '(true() and true()) and (false() or true())': true,
    '((true() or false()) and (false() or true())) and (false() or true())': true,
    '((true() or false()) and (false() or false())) and (false() or true())': false,
    '-1': /^-1$/,
    '1-1': /^0$/,
    '1+1': /^2$/,
    '0 > 0': false,
    '(0 > 0)': false,
    'false() != "true"': true,
    '(false() != "true")': true,
    '(0 = 0) and (false() != "true")': true,
    '0 = 0 and false() != "true"': true,
    '(0 > 0) and (false() != "true")': false,
    '0 > 0 and false() != "true"': false,
    "if( /something, 'A', 'B' )": 'B',
    "if( /something  != '', 'A', 'B' )": 'B',
    "if( '' != '', 'A', 'B' )": 'B',
    "if( true(), 'A', 'B' )": 'A',
    "if ( /something, 'A', 'B' )": 'B',
    "if ( /something  != '', 'A', 'B' )": 'B',
    "if ( '' != '', 'A', 'B' )": 'B',
    "if ( true(), 'A', 'B' )": 'A',
    "not(selected(../dob_method,'approx'))": true,
    "not(not(selected(../dob_method,'approx')))": false,
    "selected(../dob_method,'approx')": false,
    "if(not(selected( ../dob_method,'approx')),  ../dob_calendar, date-time( decimal-date-time( today() ) - (365.25 * ../age_years) - (30.5 * ../age_months ) ) )": '',
    "if(not(selected( ../dob_method,'approx')),  ../dob_calendar, date-time( decimal-date-time( today() ) - (365.25 * ../age_years ) - (30.5 * ../age_months ) ) )": '',
    "date-time( decimal-date-time( today() ) - (365.25 * ../age_years) - (30.5 * ../age_months ) )": SIMPLE_DATE_MATCH,
    "date-time( decimal-date-time( today() ) - (365.25 * ../age_years ) - (30.5 * ../age_months ) )": SIMPLE_DATE_MATCH,
    "(365.25 * ../age_years) - (30.5 * ../age_months )": 0,
    "(365.25 * ../age_years )": 0,
    "(365.25 * ../age_years)": 0,
    "(30.5 * ../age_months )": 0,
    "(30.5 * ../age_months)": 0,
    "(../age_months )": '',
    "(../age_months)": '',
    "(0) - (0)": 0,
    "30.5 * ../age_months": 0,
    "2*3": 6,
    "(2*3)": 6,
    "2 * 3": 6,
    "(2 * 3)": 6,
    "2+3": 5,
    "(2+3)": 5,
    "2 + 3": 5,
    "(2 + 3)": 5,
    "today() < (today() + 1)": true,
    "today() > (today() + 1)": false,
    "today() < '1970-06-03'": false,
    "today() > '1970-06-03'": true,
    "today() + 1 < '1970-06-03'": false,
    "today() + 1 > '1970-06-03'": true,
    '.': '',

    // These tests exposed a weird bug which would return "Too many tokens" if dot was followed by a comparator
    ".>1": false,
    ".> 1": false,
    ". >1": false,
    ". > 1": false,
    ".>=1": false,
    ".>= 1": false,
    ". >=1": false,
    ". >= 1": false,
    ".<1": true,
    ".< 1": true,
    ". <1": true,
    ". < 1": true,
    ".<=1": true,
    ".<= 1": true,
    ". <=1": true,
    ". <= 1": true,

    '1=1': true,
    '1=0': false,
    '0=1': false,

    '1 =1': true,
    '1 =0': false,
    '0 =1': false,

    '1= 1': true,
    '1= 0': false,
    '0= 1': false,

    '1 = 1': true,
    '1 = 0': false,
    '0 = 1': false,

    "../some-path='some-value'": false,
    '../some-path="some-value"': false,
    "../some-path= 'some-value'": false,
    "../some-path ='some-value'": false,
    "../some-path = 'some-value'": false,

    "'some-value'=../some-path": false,
    '"some-value"=../some-path': false,
    "'some-value'= ../some-path": false,
    "'some-value' =../some-path": false,
    "'some-value' = ../some-path": false,

  }, function(matcher, expression) {
    it('should convert "' + expression + '" to match "' + matcher + '"', () => {
      var evaluated = xEval(expression);

      switch(typeof matcher) {
        case 'boolean': return assert.equal(evaluated.booleanValue, matcher);
        case 'number': return assert.equal(evaluated.numberValue, matcher);
        case 'string': return assert.equal(evaluated.stringValue, matcher);
        default: assert.match(evaluated.stringValue, matcher);
      }
    });
  });
});
