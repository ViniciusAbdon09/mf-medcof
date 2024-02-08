import React from "react";

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="my-4 max-w-md mx-auto p-8 bg-red-100 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold text-red-600 mb-4">Ops! Algo deu errado...</h2>
          <p className="text-lg text-red-800 mb-4">
            Houve um erro ao carregar o componente. Por favor, tente novamente mais tarde.
          </p>
        </div>
      )
    }

    return this.props.children
  }
}
