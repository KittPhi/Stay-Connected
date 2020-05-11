from aiohttp import web
import socketio
import main

sio = socketio.AsyncServer()
app = web.Application()
sio.attach(app)

# return index.html (endpoint)
async def index_handler(request):
    with open('app.html') as f:
        return web.Response(text=f.read(), content_type='text/html')

# event listener (client -> server)
@sio.on('message')

async def message_handler(socket_id, data):

    print("Socket ID: " , socket_id)
    print(data)

    # pass html data to python script
    first = await main.main(data)
    first = first.to_json()
    await sio.emit('result', first)

@sio.on('result')
def toClient(first):
    print(first, ' made it to server')
            

# @sio.on('result')
# async def result_handler(data):
#     sio.emit('result', data)

# bind endpoint
# app.router.add_static('/static', 'static')
app.router.add_static('/static', 'static', name='static')
app.router.add_get('/', index_handler)

# starts the server
if __name__ == '__main__':
    web.run_app(app)