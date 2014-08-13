v0.1.0

The application needs to allow a client to:

- list all available instances of the current (hardcoded for
  now) application;

- perform basic crud operations on instances, namely:
    - create a new instance
	- delete an instance
	- start/stop an instance


Example data:

app = {
	name: "Name of the application",
	dockerfile: "tar of the Dockerfile + other files here",
	gitRepository: "endpoint of the git repository",
	accessKeys: "optional, keys to access the repository"
};

instance = {
	name: "Name of the intance",
	env: "object containing all env vars",
	commit: "id of the commit to checkout",
}
