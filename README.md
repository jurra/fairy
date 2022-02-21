# Test bench to discover JupyFAIR requirements
Here I am experimetning with several concepts we have discussed:
1. Using figshare api to upload and download document.
2. Experiment with design patterns when possible
3. Explore ORCID to chain it with other events
4. Explore validation mechanisms.
5. Other ideas......

## Running the code
- I am using python virtual environments:
```sh
# Create environment for project
python3 -m venv .env

# Activate environment
source .env/bin/activate
```
- To reproduce the environment dependencies, I am relying on `setup.py`
- In development mode I install packages using `pip install -e .`
