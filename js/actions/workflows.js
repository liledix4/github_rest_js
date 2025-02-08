import { readTextFile } from "../../modules/js_xhr_ajax/xhr_ajax.js";


export function getWorkflows(user, repo, token, callback) {
  readTextFile(
    {
      method: 'GET',
      url: `https://api.github.com/repos/${user}/${repo}/actions/runs?per_page=100`,
      headers: [
        {name: 'Accept', value: 'application/vnd.github+json'},
        {name: 'Authorization', value: 'Bearer ' + token},
        {name: 'X-GitHub-Api-Version', value: '2022-11-28'}
      ]
    },
    callback
  );
}


export function deleteWorkflows(user, repo, id, token, callback) {
  readTextFile(
    {
      method: 'DELETE',
      url: `https://api.github.com/repos/${user}/${repo}/actions/runs/${id}`,
      headers: [
        {name: 'Accept', value: 'application/vnd.github+json'},
        {name: 'Authorization', value: 'Bearer ' + token},
        {name: 'X-GitHub-Api-Version', value: '2022-11-28'}
      ]
    },
    callback
  );
}