cmd_Release/obj.target/addon.node := g++ -o Release/obj.target/addon.node -shared -pthread -rdynamic -m64  -Wl,-soname=addon.node -Wl,--start-group Release/obj.target/addon/hello.o -Wl,--end-group -lnode
