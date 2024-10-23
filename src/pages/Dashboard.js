import React from "react";
import Header from "../components/header";
import Cards from "../components/Cards";
import { Modal } from "antd";
import { useState } from "react";
import AddExpenseModal from "../components/Modals/addExpense";
import AddIncomeModal from "../components/Modals/addIncome";
function Dashboard() {
  const [isExpenseModalVisible, setIsExpenseModalVisible] = useState(false);
  const [isIncomeModalVisible, setIsIncomeModalVisible] = useState(false);
  const showExpenseModal = () => {
    setIsExpenseModalVisible(true);
  };

  const showIncomeModal = () => {
    setIsIncomeModalVisible(true);
  };

  const handleExpenseCancel = () => {
    setIsExpenseModalVisible(false);
  };

  const handleIncomeCancel = () => {
    setIsIncomeModalVisible(false);
  };

  const onFinish = (values, types) => {
    console.log("On Finish", values, types);
  };

  return (
    <div>
      <Header />
      <Cards
        showExpenseModal={showExpenseModal}
        showIncomeModal={showIncomeModal}
      />
      <Modal
        style={{ fontWeight: 600 }}
        title="Add Expense"
        visible={isIncomeModalVisible}
        onCancel={handleIncomeCancel}
        footer={null}
      >
        Income
      </Modal>
      <AddExpenseModal
        isExpenseModalVisible={isExpenseModalVisible}
        handleExpenseCancel={handleExpenseCancel}
        onFinish={onFinish}
      />
      <AddIncomeModal
        isIncomeModalVisible={isIncomeModalVisible}
        handleIncomeCancel={handleIncomeCancel}
        onFinish={onFinish}
      />
    </div>
  );
}

export default Dashboard;
