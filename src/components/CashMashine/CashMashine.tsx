import React, { useState } from 'react';
import './CashMashine.css';
import { Country } from './Country';
import { v1 } from 'uuid';

export type BanknotsType = 'USD' | 'RUB' | 'All';

export type MoneyType = {
  banknote: string;
  nominal: number;
  id: string;
};

let defaultMoney: Array<MoneyType> = [
  { banknote: 'USD', nominal: 100, id: v1() },
  { banknote: 'USD', nominal: 100, id: v1() },
  { banknote: 'RUB', nominal: 100, id: v1() },
  { banknote: 'USD', nominal: 100, id: v1() },
  { banknote: 'USD', nominal: 100, id: v1() },
  { banknote: 'RUB', nominal: 100, id: v1() },
  { banknote: 'USD', nominal: 100, id: v1() },
  { banknote: 'RUB', nominal: 100, id: v1() },
];

export const moneyFilter = (
  money: Array<MoneyType>,
  filter: BanknotsType
): any => {
  if (filter === 'All') {
    return money;
  }

  return money.filter((m) => m.banknote === filter);
};

export const CashMashine = () => {
  const [money, setMoney] = useState<Array<MoneyType>>(defaultMoney);
  const [filterValue, setFilterValue] = useState<BanknotsType>('All');

  const filteredMoney = moneyFilter(money, filterValue);

  const addMoney = (banknote: BanknotsType) => {
    const newMoney = { banknote, nominal: 100, id: v1() };
    setMoney([newMoney, ...money]);
  };

  const removeMoney = (key: BanknotsType) => {
    const index = money.findIndex((el) => {
      return el.banknote === key;
    });
    if (index !== -1) {
      setMoney(money.filter((el, i) => i !== index));
    }
  };

  return (
    <div className="App">
      <Country
        data={filteredMoney}
        setFilterValue={setFilterValue}
        addMoney={addMoney}
        removeMoney={removeMoney}
      />
    </div>
  );
};
