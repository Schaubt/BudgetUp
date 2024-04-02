import React, { useState } from "react";
import NavBar from "../components/navBar.js"
import BarChart from "../components/BarChart";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js/auto";


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
          <div className="mt-7 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[39%] max-md:ml-0 max-md:w-full">

                <div className="bg-lightBlue font-semibold mb-4 mx-20 px-20 rounded-lg">
                  <button type="button">Add New Budget</button>
                  <input type="hidden" id="addTreeCounterValue" name="addTreeCounter" value="0" />
                </div>
                {/* {isSubmitted &&(
            <form >

            <div className="mt-11 max-md:mt-10">Salary:
            </div>
            <input type="number" id="salary" onChange={handleChange} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your Income" required />
            <div className="mt-7">Groceries:</div>
            <input type="number" id="groceries" onChange={handleChange} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your Income" required />
            <div className="mt-8">Credit card Bill:</div>
            <input type="number" id="creditCard" onChange={handleChange} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your Income" required />

            <div className="mt-11 max-md:mt-10">Rent:</div>
            <input type="number" id="rent" onChange={handleChange} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your Income" required />

            <div className="mt-8">Restaurants:</div>
            <input type="number" id="restaurants" onChange={handleChange} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your Income" required />

            <div className="mt-11 max-md:mt-10">Entertainment:</div>
            <input type="number" id="entertainment" onChange={handleChange} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your Income" required />

            <div className="mt-10">Optional:</div>
            <input type="number" id="optional" onChange={handleChange} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your Income" required />
            
            <button type="submit" onClick={handleSubmit}className="bg-gray-50 border border-black rounded-full text-xl mt-9 p-3">Submit</button>
            </form>
          )
          } */}
                <div className="flex flex-col grow items-start px-16 pt-10 pb-20 w-full text-2xl text-black bg-lightBlue rounded-3xl max-md:px-5 max-md:mt-10 max-md:max-w-full">

                  <div className="self-center font-semibold text-3xl whitespace-nowrap">
                    Current Budget
                  </div>
                  <form >

                    <div className="mt-11 max-md:mt-10">Salary:
                    </div>
                    <input type="number" id="salary" onChange={handleChange} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your Income" required />
                    <div className="mt-7">Groceries:</div>
                    <input type="number" id="groceries" onChange={handleChange} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your Income" required />
                    <div className="mt-8">Credit card Bill:</div>
                    <input type="number" id="creditCard" onChange={handleChange} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your Income" required />

                    <div className="mt-11 max-md:mt-10">Rent:</div>
                    <input type="number" id="rent" onChange={handleChange} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your Income" required />

                    <div className="mt-8">Restaurants:</div>
                    <input type="number" id="restaurants" onChange={handleChange} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your Income" required />

                    <div className="mt-11 max-md:mt-10">Entertainment:</div>
                    <input type="number" id="entertainment" onChange={handleChange} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your Income" required />

                    <div className="mt-10">Optional:</div>
                    <input type="number" id="optional" onChange={handleChange} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your Income" required />

                    <button type="submit" onClick={handleSubmit} className="bg-gray-50 border border-black rounded-full text-xl mt-9 p-3">Submit</button>
                  </form>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[61%] max-md:ml-0 max-md:w-full">

                <div className="shrink-0 mx-auto max-w-full rounded-3xl bg-lightBlue bg-opacity-20 h-auto w-[726px] max-md:mt-10" > </div>
              </div>
            </div>
          </div>
          <div className="mt-52 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-2/5 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow px-16 pt-9 pb-20 w-full text-2xl text-black bg-lightBlue rounded-3xl max-md:px-5 max-md:mt-10 max-md:max-w-full">
                  <div className="text-3xl font-semibold whitespace-nowrap max-md:mr-2.5">
                    Last Month Budget
                  </div>
                  <div className="mt-11 max-md:mt-10">Salary: $<span name="pastSalary">4500</span>
                  </div>
                  <div className="mt-7">Groceries:
                    $<span name="pastGroceries">300</span>
                  </div>
                  <div className="mt-8">Credit card Bill: $<span name="pastCreditCardBill">400</span></div>

                  <div className="mt-11 max-md:mt-10">Rent: $<span name="pastRent">900</span></div>

                  <div className="mt-8">Restaurants: $<span name="pastRestaurants">400</span></div>

                  <div className="mt-11 max-md:mt-10">Entertainment:$<span name="pastEntertainment">200</span></div>

                  <div className="mt-10">Optional: $<span name="pastOptional">500</span></div>

                </div>
              </div>
              <div className="flex flex-col ml-5 w-3/5 max-md:ml-0 max-md:w-full">
              </div>
            </div>
          </div>
          </div>
          </div>
         <div class="tab-pane fade" id="spending-tab-pane" role="tabpanel" aria-labelledby="spending-tab" tabindex="0"> </div>
          <div class="tab-pane fade" id="compare-tab-pane" role="tabpanel" aria-labelledby="compare-tab" tabindex="0"><BarChart chartData={chartData} /></div>
          <div class="tab-pane fade" id="disabled-tab-pane" role="tabpanel" aria-labelledby="disabled-tab" tabindex="0">...</div>
        </div>
    </>
  );
}

export default Finance_Dashboard;
