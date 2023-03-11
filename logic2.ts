type person = {
    pre_tax_amt: number;
    calc_type: string;
}

type userData = {
    timestamp: string;
    people: {
        [key: string]: person
    };
    tax: number;
    tip_type: string;
    tip_val: number
}

let input:userData = JSON.parse("{\r\n    \"timestamp\": \"20230304T215800-0500\",\r\n    \"people\": {\r\n        \"Grace\": {\r\n            \"pre_tax_amt\": 22,\r\n            \"calc_type\": \"exact\"\r\n        },\r\n        \"Sachin\": {\r\n            \"pre_tax_amt\": 15,\r\n            \"calc_type\": \"exact\"\r\n        },\r\n        \"Anoush\": {\r\n            \"pre_tax_amt\": 19,\r\n            \"calc_type\": \"exact\"\r\n        },\r\n        \"Guadalupe\": {\r\n            \"pre_tax_amt\": 6,\r\n            \"calc_type\": \"exact\"\r\n        },\r\n        \"Sophia\": {\r\n            \"pre_tax_amt\": 7,\r\n            \"calc_type\": \"exact\"\r\n        }\r\n    },\r\n    \"tax\": 5.88,\r\n    \"tip_type\": \"pre_tax_pct\",\r\n    \"tip_val\": 20\r\n}")

console.log(input)