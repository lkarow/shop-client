import '@testing-library/jest-dom';
import { sum } from '../utility/utility';
import { deliveryCost } from '../utility/utility';
import { total } from '../utility/utility';
import { numberOfItemsInCart } from '../utility/utility';
import { formatDate } from '../utility/utility';

describe('utility functions', () => {
  test('sum function', () => {
    const mockSum = sum([
      {
        item: {
          _id: '1',
          Name: 'testItem',
          Brand: 'testBrand',
          Price: 10,
          ImagePath: 'testPath',
        },
        amount: 3,
        size: '40',
      },
      {
        item: {
          _id: '2',
          Name: 'testItem',
          Brand: 'testBrand',
          Price: 55,
          ImagePath: 'testPath',
        },
        amount: 1,
        size: '40',
      },
    ]);
    expect(mockSum).toEqual(85);
  });

  test('deliveryCost function', () => {
    const expectDeliveryCost = deliveryCost([
      {
        item: {
          _id: '1',
          Name: 'testItem',
          Brand: 'testBrand',
          Price: 10,
          ImagePath: 'testPath',
        },
        amount: 1,
        size: '40',
      },
    ]);
    const expectNoDeliveryCost = deliveryCost([
      {
        item: {
          _id: '1',
          Name: 'testItem',
          Brand: 'testBrand',
          Price: 51,
          ImagePath: 'testPath',
        },
        amount: 1,
        size: '40',
      },
    ]);
    expect(expectDeliveryCost).toEqual(4.99);
    expect(expectNoDeliveryCost).toEqual(0);
  });

  test('total function', () => {
    const expectTotalWithDeliveryCost = total([
      {
        item: {
          _id: '1',
          Name: 'testItem',
          Brand: 'testBrand',
          Price: 10,
          ImagePath: 'testPath',
        },
        amount: 1,
        size: '40',
      },
      {
        item: {
          _id: '2',
          Name: 'testItem',
          Brand: 'testBrand',
          Price: 10,
          ImagePath: 'testPath',
        },
        amount: 3,
        size: '40',
      },
    ]);
    const expectTotalWithoutDeliveryCost = total([
      {
        item: {
          _id: '1',
          Name: 'testItem',
          Brand: 'testBrand',
          Price: 10,
          ImagePath: 'testPath',
        },
        amount: 1,
        size: '40',
      },
      {
        item: {
          _id: '2',
          Name: 'testItem',
          Brand: 'testBrand',
          Price: 10,
          ImagePath: 'testPath',
        },
        amount: 10,
        size: '40',
      },
    ]);
    expect(expectTotalWithDeliveryCost).toEqual(44.99);
    expect(expectTotalWithoutDeliveryCost).toEqual(110);
  });

  test('numberOfItemsInCart function', () => {
    const mockNumberOfItemsInCart = numberOfItemsInCart([
      {
        item: {
          _id: '1',
          Name: 'testItem',
          Brand: 'testBrand',
          Price: 10,
          ImagePath: 'testPath',
        },
        amount: 1,
        size: '40',
      },
      {
        item: {
          _id: '2',
          Name: 'testItem',
          Brand: 'testBrand',
          Price: 10,
          ImagePath: 'testPath',
        },
        amount: 10,
        size: '40',
      },
    ]);
    expect(mockNumberOfItemsInCart).toEqual(11);
  });

  test('formatDate function', () => {
    const mockFormat1 = formatDate('01/01/2022');
    const mockFormat2 = formatDate('02-22-2022');
    const mockFormat3 = formatDate('10.10.2022');
    const mockFormat4 = formatDate('13/10/2022');
    const mockFormat5 = formatDate('abc');
    expect(mockFormat1).toEqual('1/1/2022');
    expect(mockFormat2).toEqual('2/22/2022');
    expect(mockFormat3).toEqual('10/10/2022');
    expect(mockFormat4).toEqual('Invalid Date');
    expect(mockFormat5).toEqual('Invalid Date');
  });
});
