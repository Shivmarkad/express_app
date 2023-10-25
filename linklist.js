class Node{
    constructor(data, next = null){
        this.data = data;
        this.next = next}
    
}

class LinkList{
    constructor(data = null){
        this.head = new Node(data)
        this.length = 1
    }
    insertFirst(data) {
        this.head = new Node(data, this.head);
        this.length++;
    }

    addNode(data, i){
        let newNode = new Node(data)
        if(this.head == null){
            this.head = newNode
            this.length = 1
        }
        if(this.length < i){
            return false
        }
        let node = this.head
        let currentIndex = 0
        let curNode;
        while(currentIndex<i && node.next){
            curNode = node;
            node = node.next
            currentIndex += 1
        }
        const iNode = new Node(data, node)
        node = iNode
        curNode.next = node
        this.length += 1
        return ;
    }
}

const myList = new LinkList(12)

myList.insertFirst(34)
myList.addNode(7,6)
myList.addNode(6,1)

console.log(myList)