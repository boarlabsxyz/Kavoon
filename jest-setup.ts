import '@testing-library/jest-dom';
import 'matchmedia-polyfill';
import 'matchmedia-polyfill/matchMedia.addListener';
import { TextEncoder, TextDecoder } from 'util';
import fetchMock from 'jest-fetch-mock';

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

fetchMock.enableMocks();
