# College Navigation Chatbot

## Description

This chatbot is designed to assist students with navigating college facilities and services. It provides information on various departments, offices, and support services, including their locations, contact details (email and phone), and operating hours. The bot can answer frequently asked questions related to finance, exams, student services, career services, accommodation, and more. It also includes a fallback mechanism to handle unknown queries and logs conversations for future analysis.

## Features

* **Department and Service Information:** Provides details about key departments like Finance, Student Services, Career Services, etc.
* **Contact Information:** Offers email addresses and phone numbers for each department.
* **Operating Hours:** Informs students about the opening hours of different offices.
* **Intent Recognition:** Categorizes user queries to provide relevant answers.
* **Fallback Handling:** Gracefully handles queries it doesn't understand.
* **Conversation Logging:** Logs conversations for analysis and improvement.
* **Greetings and Farewells:** Provides standard greetings and farewells.

## Installation

This chatbot is built using the Rasa framework. To run it, you'll need to:

1.  **Install Rasa:**

    ```bash
    pip install rasa
    ```



2.  **Train the Rasa model:**

    ```bash
    rasa train
    ```

3.  **Run the Rasa shell to interact with the bot:**

    ```bash
    rasa shell
    ```

## Files

The project consists of the following key files:

* **`domain.yml`:** Defines the bot's domain, including intents, entities, slots, responses, and actions.
* **`nlu.yml`:** Contains the Natural Language Understanding (NLU) training data, including intents and examples.
* **`stories.yml`:** Defines the conversation flows (stories) the bot can handle.
* **`config.yml`:** Configures the Rasa pipeline and policies.
* **`actions.py`:** Contains custom actions, including the fallback action and actions to provide specific department information.
* **`rules.yml`:** Contains rules for handling specific conversation patterns.

## Usage

Users can interact with the chatbot to ask questions about various college services. Here are some example queries:

* "Where is the Finance Department?"
* "How do I apply for a refund?"
* "What are the office hours for Student Services?"
* "Can I get help with my CV?"
* "How do I get a matriculation letter?"

The bot will provide the relevant information based on the user's intent.

## Dependencies

* Rasa (version 3.1)

## Contributing

Contributions to this project are welcome! To contribute:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes.
4.  Commit your changes with clear and descriptive commit messages.
5.  Push your changes to your fork.
6.  Submit a pull request.

Please follow the project's coding style and guidelines.

## License

This project utilizes the Rasa framework, which is distributed under the Apache 2.0 license. Please see the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0) for more details.

## Author

(Harsh, Brice and Samed)


## Additional Notes

* The chatbot uses a custom fallback action (`action_fallback_and_log`) to handle out-of-scope queries and logs the conversation to `conversation_log.json`.
* The bot provides department information with formatted messages including email, phone, and open hours.
* Consider expanding the NLU data and stories to cover more user queries and conversation flows.
* You can further enhance the bot by adding features like user authentication, database integration, or more complex dialog management.
