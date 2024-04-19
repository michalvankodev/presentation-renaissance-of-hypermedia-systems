## Phoenix LiveView

```elixir
def render(assigns) do
  ~L"""
  <div class="">
    <div>
      <div>
        <button phx-click="github_deploy">Deploy to GitHub</button>
      </div>
      Status: <%= @deploy_step %>
    </div>
  </div>
  """
end
```


Note:

## Pheonix liveview 

Enables rich, real-time user experiences with server-rendered HTML.

LiveView powered applications are stateful on the server with bidirectional communication via WebSockets, offering a vastly simplified programming model compared to JavaScript alternatives. 
