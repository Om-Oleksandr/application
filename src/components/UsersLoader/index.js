import React, { Component } from "react";
import { getRandomUsers } from "../../api";
import Spinner from "./../Spinner";
import Error404 from "./../Error404";
import UsersList from "./UsersList";
import Pagination from "./../Pagination";
import { configRandomUser } from "./../../configs";
import ControlAmount from "./ControlAmount";
import SelectNationality from "./SelectNationality";
class UsersLoader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isPending: false,
      error: null,
      currentPage: 1,
      cardsAmount: configRandomUser.AMOUNT,
      selectedNationality: "",
      isMale: false,
    };
  }
  loading = () => {
    const { currentPage, cardsAmount, selectedNationality, isMale } =
      this.state;
    this.setState({ isPending: true });
    getRandomUsers({
      page: currentPage,
      results: cardsAmount,
      nat: selectedNationality,
      gender: isMale ? "male" : "female",
    })
      .then((data) => {
        if (data.error) {
          this.setState({ error: data.error });
        }
        this.setState({ users: data.results, error: null });
      })
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ isPending: false }));
  };
  componentDidMount() {
    this.loading();
  }
  componentDidUpdate(prevProps, prevState) {
    const { currentPage, cardsAmount, selectedNationality, isMale } =
      this.state;
    if (
      currentPage !== prevState.currentPage ||
      cardsAmount !== prevState.cardsAmount ||
      selectedNationality !== prevState.selectedNationality ||
      isMale !== prevState.isMale
    ) {
      this.loading();
    }
  }
  handlePrevBtn = () => {
    if (this.state.currentPage > 1) {
      this.setState((state) => ({ currentPage: state.currentPage - 1 }));
    }
  };

  setResults = (value) => this.setState({ cardsAmount: value });
  setNationality = (value) => this.setState({ selectedNationality: value });

  checkBoxHandler = ({ target, target: { value } }) => {
    this.setState({ cardsAmount: Number(value) });
  };

  handleNextBtn = () =>
    this.setState((state) => ({ currentPage: state.currentPage + 1 }));

  handleCheckBox = () => {
    const { isMale } = this.state;
    this.setState({ isMale: !isMale });
  };

  render() {
    const {
      users,
      isPending,
      error,
      currentPage,
      cardsAmount,
      selectedNationality,
      isMale,
    } = this.state;
    if (isPending) {
      return <Spinner />;
    }
    if (error) {
      return <Error404 />;
    }

    return (
      <section>
        <h2>Users list</h2>

        <SelectNationality
          nationalities={configRandomUser.NATIONALITIES}
          setNationality={this.setNationality}
          selectedNationality={selectedNationality}
        />
        <label>
          <input
            type="checkbox"
            onChange={this.handleCheckBox}
            checked={isMale}
          />
          male
        </label>

        <ControlAmount
          cardsAmount={cardsAmount}
          amount={configRandomUser.CARD_AMOUNTS}
          setResults={this.setResults}
        />
        <Pagination
          currentPage={currentPage}
          prevFunc={this.handlePrevBtn}
          nextFunc={this.handleNextBtn}
        />
        <UsersList users={users} />
      </section>
    );
  }
}

UsersLoader.propTypes = {};

export default UsersLoader;
