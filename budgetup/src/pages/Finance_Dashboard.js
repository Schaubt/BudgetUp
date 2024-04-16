import React, { useState } from "react";
import NavBar from "../components/navBar.js"
import BarChart from "../components/BarChart";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js/auto";
import CRUDModal from "../components/AddBudget.js";


function Finance_Dashboard() {
  const [formData, setFormData] = useState({
    salary: '',
    groceries: '',
    creditCard: '',
    rent: '',
    restaurants: '',
    entertainment: '',
    optional: '',
  });

  const [chartData, setChartData] = useState({
    labels: ["2016", "2017", "2018", "2019", "2020"],
    dataset1: [250, 1000, 900, 150, 500], // Sample data for dataset 1
    dataset2: [300, 1200, 900, 400, 400] // Sample data for dataset 2
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    if (id === 'salary') {
      setFormData((prevData) => ({
        ...prevData,
        salary: value,
      }));
    }

    if (id === 'groceries') {
      setFormData((prevData) => ({
        ...prevData,
        groceries: value,
      }));
    }

    if (id === 'creditCard') {
      setFormData((prevData) => ({
        ...prevData,
        creditCard: value,
      }));
    }

    if (id === 'rent') {
      setFormData((prevData) => ({
        ...prevData,
        rent: value,
      }));
    }

    if (id === 'restaurants') {
      setFormData((prevData) => ({
        ...prevData,
        restaurants: value,
      }));
    }

    if (id === 'entertainment') {
      setFormData((prevData) => ({
        ...prevData,
        entertainment: value,
      }));
    }

    if (id === 'optional') {
      setFormData((prevData) => ({
        ...prevData,
        optional: value,
      }));
    }
    console.log(id + ' ' + value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };
  return (
    <>
      <NavBar />
      <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
          <button class="nav-link active" id="budgeting-tab" data-bs-toggle="tab" data-bs-target="#budgeting-tab-pane" type="button" role="tab" aria-controls="budgeting-tab-pane" aria-selected="true">Budgeting</button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link" id="spending-tab" data-bs-toggle="tab" data-bs-target="#spending-tab-pane" type="button" role="tab" aria-controls="spending-tab-pane" aria-selected="false">Spending</button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link" id="compare-tab" data-bs-toggle="tab" data-bs-target="#compare-tab-pane" type="button" role="tab" aria-controls="compare-tab-pane" aria-selected="false">Comparing</button>
        </li>
      </ul>
      <div class="tab-content" id="myTabContent">
        <div class="tab-pane fade show active" id="budgeting-tab-pane" role="tabpanel" aria-labelledby="budgeting-tab" tabindex="0"><div className="flex flex-col px-20 py-20 bg-white max-md:px-5">
          <CRUDModal />
      </div>
      </div >
      <div class="tab-pane fade" id="spending-tab-pane" role="tabpanel" aria-labelledby="spending-tab" tabindex="0"> </div>
      <div class="tab-pane fade" id="compare-tab-pane" role="tabpanel" aria-labelledby="compare-tab" tabindex="0"><BarChart chartData={chartData} /></div>
      <div class="tab-pane fade" id="disabled-tab-pane" role="tabpanel" aria-labelledby="disabled-tab" tabindex="0">...</div>
    </div >
    </>
  );
}

export default Finance_Dashboard;
