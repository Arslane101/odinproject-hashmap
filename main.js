class Pair{
    constructor(key,value){
        this.key = key
        this.value = value
        this.next = null

    }
}
class HashMap{
    
    constructor(load,size){
        this.load = load
        this.size = size
        this.buckets = new Array(this.size)
    }
    
    hash(key){
        let hashcode = 0
        const primenumber =31
        for (let i=0;i< key.length;i++){
            hashcode = primenumber * hashcode + key.charCodeAt(i)
            hashcode = hashcode % this.size

        }
        return hashcode  
    }
    set(key,value){
        let hash = this.hash(key)
        let node = new Pair(key,value)
        if(hash < 0 || hash >= this.buckets.length){
            throw new Error("Trying to access index out of bounds")

        }
        else if (!this.buckets[hash]){
            this.buckets[hash]= node
            return
        }
        else if(this.buckets[hash].key === key) this.buckets[hash].value = value
        else {
            let temp =  this.buckets[hash] 
            while( temp.next != null) {
              temp = temp.next
              if(temp.key === key) {
                temp.value = value 
                return
            } 
        }
         temp.next = node

        if(this.entries().length > this.load * this.size){
            this.buckets = [...this.buckets, ...new Array(this.size)]
            this.size = this.buckets.length
    

        }
          
    }
    }
    get(key){
        let hash = this.hash(key)
        if(hash < 0 || hash >= this.buckets.length){
            throw new Error("Trying to access index out of bounds")

        }
        if(this.buckets[hash].key === key) return value
        else {
            let temp = this.buckets[hash]
            while(temp.key != key){
                temp.key = temp.next.key
            }
            return temp.value
        }
    }
    remove(key){
        let hash = this.hash(key)
        if(hash < 0 || hash >= this.buckets.length){
            throw new Error("Trying to access index out of bounds")

        }
        else {
           if(this.buckets[hash].key === key) return value
           else {
            let temp = this.buckets[hash].key
            let nexttemp = temp.next
            while(nexttemp != key){
                nexttemp = nexttemp.next.key
            }
            temp.next = nexttemp.next
            return true
        }
        return false
        }
   }
   length(){
     let tmp=0
     let length = 0
     for(let i=0;i<this.buckets.length;i++){
        let step = this.buckets[i]
        if(!step) continue
        while(step.next != null){
            tmp +=1
            step = step.next
        }
        length+=tmp
        console.log(tmp)
        tmp=0
     }
     return length
   }
   has(key){
        let hash = this.hash(key)
        if(hash < 0 || hash >= this.buckets.length){
            throw new Error("Trying to access index out of bounds")

        }
        if (!this.buckets[hash]) return false
        else if(this.buckets[hash].key === key) return true
        else {
            let temp = this.buckets[hash]
            while(temp.key != key && temp.next != null){
                temp = temp.next
                console.log("loop")
            }
            return true
        }
        return false
    }
   clear(){
     for(let i=0;i<this.buckets.length;i++){
        this.buckets[i]=null
    }
   } 
   keys(){
    let key = []
    for(let i=0;i<this.buckets.length;i++){
        let step = this.buckets[i]
        if(!step) continue
        key.push(step.key)
        while(step.next != null){
            step = step.next.key
            key.push(step)
        }
    }
    return key
   }
   values(){
    let value = []
    for(let i=0;i<this.buckets.length;i++){
        let step = this.buckets[i]
        if(!step) continue
        value.push(step.value)
        while(step.next != null){
            step = step.next.value
            value.push(step)
        }
    }
    return value
   }
   entries(){
    let entry = []
    for(let i=0;i<this.buckets.length;i++){
        let step = this.buckets[i]
        if(!step) continue
        entry.push([step.key,step.value])
        while(step.next != null){
            step = step.next
            entry.push([step.key,step.value])
        }
    }
    return entry
   }
     
}

const test= new HashMap(0.75,16)
test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')




test.set('moon', 'silver')


test.set('lion','arslane')

test.set('ice cream','black')


console.log(test.entries())

console.log(test.length())

console.log(test.size)