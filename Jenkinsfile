pipeline {
    agent any
    stages {
        stage("Client Build") {
            steps {
                echo "Building Frontend"
                sh "cd frontend && sudo npm install"
                sh "cd frontend && sudo npm run build"
            }
        }
        stage("Server Install") {
            steps {
                echo "Installing server Dependencies"
                sh "cd backend && sudo npm install"
            }
        }
    }
}