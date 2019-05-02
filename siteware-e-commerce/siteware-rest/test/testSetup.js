const assert = require('assert');
const Chai = require('chai');
const chai_as_promised = require('chai-as-promised');
const chai_http = require('chai-http');
const sinon = require('sinon');
const request = require('supertest');
const _ = require('lodash');

const expect = Chai.expect;
const chai = Chai.use(chai_as_promised);
Object.assign(global, {
    assert,
    chai,
    chai_http,
    sinon,
    request,
    expect,
    _
});
