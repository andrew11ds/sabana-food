import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-clients',
  templateUrl: './manage-clients.component.html',
  styleUrls: ['./manage-clients.component.css']
})
export class ManageClientsComponent implements OnInit {

  items = ['aaaaaa aaaa aa aaaaa aaaaa aaaaaa aa aaaaa aaa aaaaa aaaaa aaaaaaa aaaaaaaaaaaaa',
            'bbbbbbbbb bbb bbbbbbbbb bbbbbbb bbbb bbbbbbbbb bbbbb bbbbb bbbbbbbbb bbbbbbbb',
            'cccccc ccccccc cccccccccccc c ccccc ccccccc ccccc ccccc ccc cccccccccc ccccccc',
            'ddddddd dd ddddd ddddd ddddddd dddd dddddd ddd dd dddddd dddddddd dddddddd ddddd',
            'fffff ffffff ffffffff ffffff ffff ffff ffffff fffff ffffffff ffffff ffffff ffff',
            'ggggggg gggggg gggg ggggg ggggggg gggggggg ggggg ggggggggg gggggggg ggggggggg',
            'gggggggggg gggggg gggggg ggggggggggg gggggg ggggggg ggggggggggg gggggggggg',
            'gggggggggg gggggggggg ggggggggg gggggggg gggg ggggg ggggggg ggggg gggggggggg'
          ];


  constructor() {}

  ngOnInit(): void {
  }

}
